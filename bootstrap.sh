#!/bin/bash
# This script creates symlinks from ~/ to dotfiles dotdir

dotdir=$(pwd)
dotbak=~/.dotfiles_old
files=".bashrc .tmux.conf .Xresources .zshrc .bash_aliases .config"
binfile="duck google"

echo "Creating $dotbak for backup of any existing dotfiles in ~"
mkdir -p $dotbak
echo "...complete."

echo "Changing to the $dotdir dotdirectory"
cd $dotdir
echo "...complete."

for file in $files; do
    echo "Moving existing dotfiles from ~ to $dotbak"
    mv ~/$file ~/.dotfiles_old/
    echo "Creating symlink to $file in home dotdirectory."
    ln -s -f $dotdir/$file ~/$file
done

# add scripts to bin
sudo ln -s -f $dotdir/$binfile /bin/
