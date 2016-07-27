import os
import sys

# dir_path = "/absolute/path/to/directory/"
dir_path = "/mnt/B4A49A87A49A4BAC/Downloads/"
# Make sure dir_path is ending in /
num_of_pages = 2
# out_file = dir_path+"14010XXXX_CV.pdf"
out_file = dir_path+"140101045_CV.pdf"


IS_PY3 = sys.version_info[0] == 3
if IS_PY3:
	_range = range
else:
	_range = xrange

cmd = "gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile="+out_file
# cmd = "gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile="+out_file
for i in _range(num_of_pages):
	filename = dir_path+str(i+1)+".pdf"
	cmd = cmd+" "+filename

os.system(cmd)