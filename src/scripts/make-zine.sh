#!/bin/bash

SCRIPT_DIR=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
re='^[0-9]+$'
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Verify args
if [[ -z ${1} || ! ${2} =~ $re || ! ${3} =~ $re || 0 > ${2} || 0 > ${3} ]]
  then 
    printf "${RED}Incorrect or missing args.${NC} Correct usage: make-zine.sh <image_dir: string> <width: num> <height: num>\n"
    exit 2
fi

cd ${SCRIPT_DIR}/../assets/zines/${1} || exit 2
printf "🦄 > ${GREEN}Found zine directory:${NC} "
pwd

function progress_bar() {
  total_steps=32
  step_size=$(( $total_steps / $2 ))
  printf "\r    ["
  for j in $(seq 1 $2); do
    if [ $j -gt $1 ]
      then printf ' %.0s' {$(seq 1 $step_size)}
      else printf '▇%.0s' {$(seq 1 $step_size)}
    fi
  done
  printf "] "
  printf "$1/$2"
}

function get_total_images() {
  total_images=0
  for i in *; do
    total_images=$(( total_images + 1 ))
  done
}

printf "🦄 > Renaming and resizing images...\n"
get_total_images
progress_bar 0 ${total_images}
images=*
i=0
for image in ${images}; do 
  i=$(( i + 1 ))
  convert ${image} -resize ${2}x${3}! ${i}.png
  progress_bar $i ${total_images}
done
printf "\n🦄 > ${GREEN}Done${NC}\n"

