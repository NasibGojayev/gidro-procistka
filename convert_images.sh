#!/bin/bash

# Function to convert and resize
# Usage: convert_img "source_path" "dest_path"
convert_img() {
    local src="public$1"
    local dest="public$2"
    
    echo "Converting $src to $dest..."
    
    if [ ! -f "$src" ]; then
        echo "Error: Source file $src not found!"
        return
    fi
    
    # Check if magick is available, otherwise try convert (ImageMagick v6 vs v7)
    if command -v magick &> /dev/null; then
        magick "$src" -resize 1200x\> -quality 80 "$dest"
    else
        convert "$src" -resize 1200x\> -quality 80 "$dest"
    fi
}

echo "Starting image optimization..."

# --- SERVICES ---
# /media/medialibrary/536/53693e6611a3fc637d64c7a657cda025.png -> ustranenie-zasora
convert_img "/media/medialibrary/536/53693e6611a3fc637d64c7a657cda025.png" "/images/services/ustranenie-zasora.webp"

# /media/medialibrary/842/8427204883f422d8fc1fe00410b39533.png -> prochistka-kanalizatsii
convert_img "/media/medialibrary/842/8427204883f422d8fc1fe00410b39533.png" "/images/services/prochistka-kanalizatsii.webp"

# /media/medialibrary/35a/35a794adf8ab6fc7c0c0ced0852bf605.png -> promyvka-kanalizatsii
convert_img "/media/medialibrary/35a/35a794adf8ab6fc7c0c0ced0852bf605.png" "/images/services/promyvka-kanalizatsii.webp"

# /media/medialibrary/539/5398db9f5a3e173e5ad8394d94283061.png -> teleinspektsiya-trub
convert_img "/media/medialibrary/539/5398db9f5a3e173e5ad8394d94283061.png" "/images/services/teleinspektsiya-trub.webp"

# --- COVERAGE ICONS ---
# /media/medialibrary/d54/d5442a8dd4e4cca915f048a589afd99a.png -> apartments
convert_img "/media/medialibrary/d54/d5442a8dd4e4cca915f048a589afd99a.png" "/images/ui/icon-apartments.webp"

# /media/medialibrary/691/6918260e87f607b648d9dd9736bafe5b.png -> cottages
convert_img "/media/medialibrary/691/6918260e87f607b648d9dd9736bafe5b.png" "/images/ui/icon-cottages.webp"

# /media/medialibrary/0ac/0ac7d0f88f84281a979e29728d59e187.png -> restaurants
convert_img "/media/medialibrary/0ac/0ac7d0f88f84281a979e29728d59e187.png" "/images/ui/icon-restaurants.webp"

# /media/medialibrary/498/498829a5c81655c8adf90160b5d0a895.png -> offices
convert_img "/media/medialibrary/498/498829a5c81655c8adf90160b5d0a895.png" "/images/ui/icon-offices.webp"

# --- COVERAGE MAIN IMAGE ---
# /media/medialibrary/687/687e1223df1e9d740feb8660f24e442a.png
convert_img "/media/medialibrary/687/687e1223df1e9d740feb8660f24e442a.png" "/images/ui/plumber-service-map.webp"

# --- TEAM ---
# /media/iblock/570/... -> viktor
convert_img "/media/iblock/570/570ff2eab56f61704f44bac79b67b7d7.jpg" "/images/team/viktor-plumber.webp"

# /media/iblock/cf1/... -> stepan
convert_img "/media/iblock/cf1/cf1e4cbf01d1f4d32772da8b841a7d80.jpg" "/images/team/stepan-plumber.webp"

# /media/iblock/7af/... -> evgeny
convert_img "/media/iblock/7af/7af975c6ea9b589a2f94c24180fda2a5.jpg" "/images/team/evgeny-plumber.webp"

# /media/iblock/be1/... -> nikolay
convert_img "/media/iblock/be1/be17cf65db4d04aa5eed4fb1eedcf57a.jpg" "/images/team/nikolay-plumber.webp"

# --- PARTNERS ---
# /media/iblock/37b/... -> gastro-gallery
convert_img "/media/iblock/37b/37b442461bf16aa6000eac961835e054.jpg" "/images/partners/gastro-gallery.webp"

# /media/iblock/e75/... -> rossinsky
convert_img "/media/iblock/e75/e75a4d71b8c6e964a5e9003d5c1e46f6.png" "/images/partners/rossinsky.webp"

# /media/iblock/553/... -> chaihona
convert_img "/media/iblock/553/5530238da7ee190252bb7c82e99cf309.jpg" "/images/partners/chaihona.webp"

# /media/iblock/f44/... -> morris-pub
convert_img "/media/iblock/f44/f44df4595ee5a3d5b2435b57324c223c.jpg" "/images/partners/morris-pub.webp"

# /media/iblock/920/... -> dodo-pizza
convert_img "/media/iblock/920/9209d4f140b98cf22b2816980bbe1bca.png" "/images/partners/dodo-pizza.webp"

# --- HERO & LOGO ---
# /media/iblock/1da/... -> hero-bg
convert_img "/media/iblock/1da/1da1e2993700a52717643b7f1372b09e.jpg" "/images/hero/hero-background.webp"

# Logo from Header (manually found in previous step)
# /media/boxsol.bitcorp/37e/37e6c47c80e94b862a3875bf3bed5b24.jpg
convert_img "/media/boxsol.bitcorp/37e/37e6c47c80e94b862a3875bf3bed5b24.jpg" "/images/logo-gidrorobot.webp"

echo "Image conversion complete!"
