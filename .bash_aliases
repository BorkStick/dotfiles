alias c='clear'
alias back='cd $OLDPWD'
alias a='. ~/.bashrc'
alias v='vagrant'
alias q='exit'
alias k='cd ..'
alias s='sudo'
alias e='vim -O '
alias E='vim -o '
alias ports='netstat -tulanp'
alias wget='wget -c'
alias weather='curl wttr.in'
alias h='history'
alias tn='tmux new -s'

alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

alias mem10='ps auxf | sort -nr -k 4 | head -10'
alias mem5='ps auxf | sort -nr -k 4 | head -5'

#Folders
alias scr='cd ~/Documents/scripts'
alias not='cd ~/Documents/borknotes'
alias dot='cd ~/dotfiles'
alias dow='cd ~/Downloads'

alias png='ping google.com'

alias hosts='sudo vim /etc/hosts'
alias borkssh='ssh aciidic@10.0.0.22' 

alias c.='code .'

alias upup='sudo apt update -y && sudo apt upgrade -y'
alias install='sudo apt install -y'
# nice nav
alias cd..='cd ..'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
# alias \/='cd /'
alias ~='cd ~'

alias md='mkdir -p'
alias rd='rmdir'

alias pssh='ssh pi@10.0.0.$1'

# Vagrant
alias v='vagrant'
alias vu='vagrant up'
alias vd='vagrant destroy -f'
alias vs='vagrant ssh'

# git
alias g='git'
alias ga='git add .'
alias gc='git commit'
alias gcm='git commit -m'
alias gp='git push'
alias gboop='git add . && git commit && git push'
alias boop='git add . && git commit -m'

#youtubedl video
alias ytdl='youtube-dl -f bestvideo+bestaudio --download-archive downloaded.txt --ignore-errors '
#youtubedl mp3
alias ytmp3='youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 --download-archive downloaded.txt --ignore-errors '

# Folders Shortcuts
[ -d ~/Dropbox ]              && alias dr='cd ~/Dropbox'
[ -d ~/Downloads ]            && alias dl='cd ~/Downloads'
[ -d ~/Desktop ]              && alias dt='cd ~/Desktop'
[ -d ~/PROJECTS ] && alias pj='cd ~/PROJECTS'

alias exip='curl icanhazip.com'
alias speedtest='curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -'
# My IP
alias myip='ip addr | sed -En "s/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p"'

