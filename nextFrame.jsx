// Script by Vince Petaccio of PetRok Studios. | www.PetRokStudios.com

// Ensure a document is open
if ( documents.length > 0 )
{
    // Change dialog settings
	var originalDialogMode = app.displayDialogs;
	app.displayDialogs = DialogModes.ERROR;

    try 
    {
    	// Get the document
        var docRef = activeDocument;

        // Get the path for the document
        var filePath = docRef.path + '/';
    		
        // Get the filename of the document
        var fileNameNoExtension = docRef.name;
        
        // Split the filename at the dots
        fileNameNoExtension = fileNameNoExtension.split( "." );
        
        // If there's a dot, remove everything after the last dot
        if ( fileNameNoExtension.length > 1 ) {
            // Get the file type
            fileType = fileNameNoExtension[fileNameNoExtension.length-1];
            
            // Decrement the filename object by removing the last element (the stuff after the last .)
          	fileNameNoExtension.length--;
            
            // Reconnect everything BEFORE the first .
            fileNameNoExtension = fileNameNoExtension.join(".");
        }

        // Get the last five characters of the filename
        lastFive = fileNameNoExtension.slice(-5);
        allButFive = fileNameNoExtension.slice(0,-6);

        // Check whether the last five characters are digits
        newDoc = isNaN(parseInt(lastFive))

        // If this is a new document, then add _00000 to the file name
        if (newDoc) {
            // Make the new file name
            newFileName = fileNameNoExtension + '_00000';
            
            // Do the saving
            makeFile(fileType.toLowerCase(), docRef, newFileName)
            
        }
        // Otherwise, find the lowest number of the file name that does not exist, starting at the index of the file name's digits
        else {
            // Create the needName switch
            needName = 1

            // Get the file number
            fileNumber = Number(lastFive);

            while (needName) {
                // Increment the file number
                fileNumber = fileNumber + 1;
            
                // Make the file number 4 digits with zeros
                switch ((fileNumber.toString()).length) {
                    case 1:
                        newFileName = allButFive + '_0000' + fileNumber.toString();
                        break;
                    case 2:
                        newFileName = allButFive + '_000' + fileNumber.toString();
                        break;
                    case 3:
                        newFileName = allButFive + '_00' + fileNumber.toString();
                        break;
                    case 4:
                        newFileName = allButFive + '_0' + fileNumber.toString();
                        break;
                    case 5:
                        newFileName = allButFive + "_" + fileNumber.toString();
                        break;
                }
                // Do the saving
                needName = makeFile(fileType.toLowerCase(), docRef, newFileName)     
            }
        }

    }
    catch(e)
    {
        // An error occured; restore dialog mode and display the error
        app.displayDialogs = originalDialogMode;
        throw e;
    }
}
else
{
    alert( "There's no file open! GET TO WORK!!!!");
}

// Function for saving the file
function makeFile(fileType, docRef, newFileName) {
    needName = 1;
    switch (fileType.toLowerCase()) {
        case 'psd': // Photoshop file
            thisSameFile = docRef.path + '/' + newFileName + '.psd';
            saveFile = new File(thisSameFile);
            if (saveFile.exists) {
                break;
            }
            else {
                saveOpt = new PhotoshopSaveOptions();
                saveOpt.embedColorProfile = true;
                saveOpt.layers = true;
                app.activeDocument.saveAs(saveFile,saveOpt,true,Extension.LOWERCASE);
                needName = 0;
                app.activeDocument.close(saveOpt.DONOTSAVECHANGES);
                open(saveFile);
                break;
            }
        case 'jpg': // JPEG file
            thisSameFile = docRef.path + '/' + newFileName + '.jpg';
            saveFile = new File(thisSameFile);
            if (saveFile.exists) {
                break;
            }
            else {
                saveOpt = new JPEGSaveOptions();
                saveOpt.embedColorProfile = true;
                saveOpt.formatOptions = FormatOptions.STANDARDBASELINE;
                saveOpt.matte = MatteType.NONE;
                saveOpt.quality = 12;
                app.activeDocument.saveAs(saveFile,saveOpt,true,Extension.LOWERCASE);
                needName = 0;
                app.activeDocument.close(saveOpt.DONOTSAVECHANGES);
                open(saveFile);
                break;
            }
        case 'png': // PNG file
            thisSameFile = docRef.path + '/' + newFileName + '.png';
            saveFile = new File(thisSameFile);
            if (saveFile.exists) {
                break;
            }
            else {
                saveOpt = new PNGSaveOptions();
                saveOpt.compression = 0;
                app.activeDocument.saveAs(saveFile,saveOpt,true,Extension.LOWERCASE);
                needName = 0;
                app.activeDocument.close(saveOpt.DONOTSAVECHANGES);
                open(saveFile);
                break;
            }
        case 'tif': // TIFF file
            thisSameFile = docRef.path + '/' + newFileName + '.tif';
            saveFile = new File(thisSameFile);
            if (saveFile.exists) {
                break;
            }
            else {
                saveOpt = new TiffSaveOptions();
                saveOpt.embedColorProfile = true;
                saveOpt.layers = false;
                saveOpt.transparency = true;
                app.activeDocument.saveAs(saveFile,saveOpt,true,Extension.LOWERCASE);
                needName = 0;
                app.activeDocument.close(saveOpt.DONOTSAVECHANGES);
                open(saveFile);
                break;
            }
    }
    return needName;
 }