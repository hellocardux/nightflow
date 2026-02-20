param(
  [string]$InputImage = ".\assets\source\roles-board.png",
  [string]$OutDir = ".\assets\roles",
  [int]$OutputSize = 200
)

$ErrorActionPreference = "Stop"

if (!(Test-Path $InputImage)) {
  throw "Input image not found: $InputImage"
}

Add-Type -AssemblyName System.Drawing

if (!(Test-Path $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir | Out-Null
}

$img = [System.Drawing.Image]::FromFile((Resolve-Path $InputImage))
Write-Host "Source image: $($img.Width) x $($img.Height)"

try {
  # Pixel-accurate coordinates from visual analysis of roles-board.png (1024x398).
  # Each colored icon box (border included) was measured precisely.
  #
  # Row 1 (Villager, Seer, Werewolf, Medium, Possessed): Y = 11 to 163
  # Row 2 (Bodyguard, Masons, Werehamster, Mythomaniac): Y = 210 to 363
  #
  # Column X ranges (left edge to right edge of each colored border):
  #   col0 (Villager/Bodyguard):    34 - 159  => x=34, w=125
  #   col1 (Seer/Masons):          242 - 367  => x=242, w=125
  #   col2 (Werewolf/Werehamster): 448 - 575  => x=448, w=127
  #   col3 (Medium/Mythomaniac):   655 - 783  => x=655, w=128
  #   col4 (Possessed):            863 - 991  => x=863, w=128

  $tiles = @(
    @{ name = "villager"; x = 34; y = 11; w = 125; h = 152 },
    @{ name = "seer"; x = 242; y = 11; w = 125; h = 152 },
    @{ name = "werewolf"; x = 448; y = 11; w = 127; h = 152 },
    @{ name = "medium"; x = 655; y = 11; w = 128; h = 152 },
    @{ name = "possessed"; x = 863; y = 11; w = 128; h = 152 },
    @{ name = "bodyguard"; x = 34; y = 210; w = 125; h = 153 },
    @{ name = "mason"; x = 242; y = 210; w = 125; h = 153 },
    @{ name = "werehamster"; x = 448; y = 210; w = 124; h = 153 },
    @{ name = "mythomaniac"; x = 655; y = 210; w = 125; h = 153 }
  )

  foreach ($t in $tiles) {
    $x = $t.x
    $y = $t.y
    $w = $t.w
    $h = $t.h

    # Clamp to image bounds
    if ($x -lt 0) { $x = 0 }
    if ($y -lt 0) { $y = 0 }
    if ($x + $w -gt $img.Width) { $w = $img.Width - $x }
    if ($y + $h -gt $img.Height) { $h = $img.Height - $y }

    # Create output bitmap at OutputSize x OutputSize (square, high quality scale)
    $bmp = New-Object System.Drawing.Bitmap($OutputSize, $OutputSize)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    try {
      $src = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
      $dst = New-Object System.Drawing.Rectangle(0, 0, $OutputSize, $OutputSize)
      $g.DrawImage($img, $dst, $src, [System.Drawing.GraphicsUnit]::Pixel)
      $outPath = Join-Path $OutDir ($t.name + ".png")
      $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Host "  Saved: $($t.name).png  (src rect: $x,$y  ${w}x${h})"
    }
    finally {
      $g.Dispose()
      $bmp.Dispose()
    }
  }
}
finally {
  $img.Dispose()
}

Write-Host ""
Write-Host "Done. $($tiles.Count) icons saved to: $OutDir"
