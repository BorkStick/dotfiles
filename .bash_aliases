alias ba='vim ~/.bash_aliases'

alias c='clear'
alias x="exit"
alias back='cd $OLDPWD'
alias a='. ~/.zshrc'
alias v='vagrant'
alias q='exit'
alias k='cd ..'
#alias s='sudo'
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
alias dot='cd ~/Documents/dotfiles'
alias dow='cd ~/Downloads'



alias not='cd ~/Documents/borknotes && code .'
alias n='cd ~/Documents/borknotes && code .'


alias png='ping google.com'

alias hosts='sudo vim /etc/hosts'
alias chostname='sudo vim /etc/hostname'

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


#search 
alias '?'=duck
alias '??'=google


#youtubedl video
alias ytdl='youtube-dl -f bestvideo+bestaudio --download-archive downloaded.txt --ignore-errors '
#youtubedl mp3
alias ytmp3='youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 --download-archive downloaded.txt --ignore-errors '

dlvid() {
cd ~/Videos
youtube-dl -f best --download-archive downloads.txt --ignore-errors $1
}

# Folders Shortcuts
[ -d ~/Dropbox ]              && alias dr='cd ~/Dropbox'
[ -d ~/Downloads ]            && alias dl='cd ~/Downloads'
[ -d ~/Desktop ]              && alias dt='cd ~/Desktop'
[ -d ~/PROJECTS ]             && alias pj='cd ~/PROJECTS'
[ -d ~/SCRIPTS ]             && alias scr='cd ~/SCRIPTS'
[ -d ~/REPOS/lab.borkslash.com ]             && alias lab='cd ~/REPOS/lab.borkslash.com'
[ -d ~/REPOS/github.com ]             && alias github='cd ~/REPOS/github.com'

alias exip='curl icanhazip.com'
alias speedtest='curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -'
# My IP
alias myip='ip addr | sed -En "s/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p"'

ipcheck () {
  curl https://ipinfo.io/$1
}

ipinfo(){ 
  curl ipinfo.io/$1
}


resphead(){
  curl -s -o /dev/null -D - $1
}

powerby(){
  curl -s -o /dev/null -D - $1 | grep x-powered-by
}

sshspeedtest () {
  yes | pv |ssh "$1" "cat >/dev/null"
}


covid () {
  curl https://corona-stats.online/$1
}

btc () {
  curl -s http://api.coindesk.com/v1/bpi/currentprice.json | python -c "import json, sys; print(json.load(sys.stdin)['bpi']['USD']['rate'])"
}


crypto () {
  curl rate.sx/$1
}

gogo() {
  scp -q ~/.bashrc $1:/tmp/.bashrc_temp;
  scp -q ~/.bash_aliases $1:/tmp/.bash_aliases_temp;
  scp -q ~/functions.sh $1:/tmp/functions.sh;
  scp -q ~/functions.txt $1:/tmp/functions.txt;
  ssh -t $1 "bash --rcfile /tmp/.bashrc_temp ; rm /tmp/.bashrc_temp /tmp/.bash_aliases_temp /tmp/functions.*"
}

fun () {
  FILE=~/functions.sh
  TMPFILE=/tmp/functions.sh
if [ ! -f "$FILE" ]; then
  sh /tmp/functions.sh
fi

}

#WEBSERVER STUFF

alias i='ls /var/www'

alias errlog='function _errlog(){ sudo tail -f /var/log/nginx/$1.error.log;};_errlog'
alias acclog='function _acclog(){ sudo tail -f /var/log/nginx/$1.access.log;};_acclog'

alias reload='sudo systemctl reload nginx'
alias perms='sudo chown -R www-data:www-data /var/www/'
alias enablesite='sudo ln -s /etc/nginx/sites-available/$1 /etc/nginx/sites-enabled/'
alias esite='function _esite(){ sudo ln -s /etc/nginx/sites-available/$1 /etc/nginx/sites-enabled/; echo "$1 Enabled";};_esite'

# Folders Shortcuts
[ -d /etc/nginx/sites-available ]              && alias ngsa='cd /etc/nginx/sites-available'
[ -d /etc/nginx/sites-enabled ]              && alias ngse='cd /etc/nginx/sites-enabled'

[ -d /var/www ]              && alias www='cd /var/www'
[ -d /var/log ]              && alias logs='cd /var/log'

