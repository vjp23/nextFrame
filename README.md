# nextFrame
A script for Photoshop which saves the current file, adding or incrementing a 4-digit serial number at the end of the filename, and keeps the file open for editing and subsequent saving as a new file. Useful for rapid production of animation frames, rotoscoping, or repetitive tasks like nametag creation.

To install, copy nextFame.jsx to the Presets > Scripts folder of your Photoshop installation, then restart Photoshop.

To use, go to File > Scripts > nextFrame. The file will be saved as a new file with a new or incremented serial number (see below), ready for editing and subsequent saving as a new file.

This process can be accelerated by wrapping the clicking into an action (RECORD > File > Scripts > nextFrame > STOP), and then assigning the action to a hotkey.

How files are named:

Ex. A file named skeltaldoot.psd is open, and has been edited. Timmy uses nextFrame, and now a new file named skeltaldoot_0001.psd is saved in the same directory as skeltaldoot.psd. Timmy makes additional changes to skeltaldoot_0001.psd, then uses nextFrame again. The updated file skeltaldoot_0001.psd is saved as skeltaldoot_0002.psd.

If Timmy is working on skeltaldoot_0001.psd when he uses nextFame, and skeltaldoot_0002.psd already exists, then the file will be saved as skeltaldoot_0003.psd instead. skeltaldoot_0002.psd will not be overwritten.

Works ONLY on .jpg, .tiff, .psd, and .png files.
--7.6.16 vjp
