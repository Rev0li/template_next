let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/dev/web/template_next
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +20 Navbar.module.css
badd +50 ~/dev/web/template_next/src/components/Services.module.css
badd +1 term://~/dev/web/template_next//49397:/usr/bin/zsh
badd +4 term://~/dev/web/template_next//49457:/usr/bin/zsh
badd +1 term://~/dev/web/template_next//49834:/usr/bin/zsh
badd +31 ~/dev/web/template_next/src/components/Homepage/Services.tsx
badd +13 ~/dev/web/template_next/src/components/Navbar.module.css
badd +7 ~/dev/web/template_next/src/components/Navbar.tsx
badd +14 term://~/dev/web/template_next//51585:/usr/bin/zsh
badd +1 term://~/dev/web/template_next//51998:/usr/bin/zsh
badd +1 term://~/dev/web/template_next//52388:/usr/bin/zsh
badd +20 term://~/dev/web/template_next//52502:/usr/bin/zsh
badd +1 term://~/dev/web/template_next//52609:/usr/bin/zsh
badd +1 term://~/dev/web/template_next//52825:/usr/bin/zsh
argglobal
%argdel
edit ~/dev/web/template_next/src/components/Navbar.module.css
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
if bufexists(fnamemodify("term://~/dev/web/template_next//52825:/usr/bin/zsh", ":p")) | buffer term://~/dev/web/template_next//52825:/usr/bin/zsh | else | edit term://~/dev/web/template_next//52825:/usr/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term://~/dev/web/template_next//52825:/usr/bin/zsh
endif
balt term://~/dev/web/template_next//52609:/usr/bin/zsh
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 8) / 17)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 039|
wincmd w
argglobal
balt Navbar.module.css
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 22 - ((21 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 22
normal! 0
wincmd w
2wincmd w
wincmd =
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
