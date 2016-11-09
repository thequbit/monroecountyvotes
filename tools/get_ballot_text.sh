#!/bin/sh

wget $1 -O ballot_full.pdf

pdftk ballot_full.pdf cat 1 output ballot.pdf

convert -density 300 ballot.pdf ballot.png

tesseract ballot.png ballot.png -psm 6

