/* pacific.js*/

// ----------------------------------------------------------------------------
// Name: TrimAllFormTextBoxes
// Abstract: Trim all text boxes in the form 
// ----------------------------------------------------------------------------
function TrimAllFormTextBoxes(frmTarget)
{	
	try
	{
		var intIndex = 0;
		var ctlCurrentControl = null;
		var intElementsLength = 0;

		// Get length of elements collection
		intElementsLength = frmTarget.elements.length;
		
		// Loop through the elements
		for (intIndex = 0; intIndex < intElementsLength - 1; intIndex += 1)
		{		
		    // Get current control
			ctlCurrentControl = frmTarget.elements[intIndex];
			
			// Text box?
			if (ctlCurrentControl.type = "text" && ctlCurrentControl.type != "button")
			{
				// Yes; trim
				ctlCurrentControl.value = ctlCurrentControl.value.trim();
			}						
		}									
	}
	catch (excError)
	{
		alert("pacific.js::TrimAllFormTextBoxes()\n"
			 + excError.name + ', ' + excError.strValue);
	}
}

// ----------------------------------------------------------------------------
// Name: IsValidEmailAddress
// Abstract: Validate the Email address format
// ----------------------------------------------------------------------------
function IsValidEmailAddress(strEmailAddress)
{
    var blnIsValidEmailAddress = false;

    try
    {
        // Variables 
        var strStart = "^";
        var strStop = "$";
        var strPattern = "";
        var rgxPattern = "";

        strPattern = strStart
                   + "[a-zA-Z][a-zA-Z0-9\\.\\-]*"
                   + "@"
                   + "[a-zA-Z][a-zA-Z0-9\\.\\-]*\\.[a-zA-Z]{2,6}"
                   + strStop

        // Declare new regular expression
        rgxPattern = new RegExp(strPattern);

        // Test email address against regular expression
        if (rgxPattern.test(strEmailAddress) == true)
        {
            // Match?; email address valid
            blnIsValidEmailAddress = true;
        }
    }
    catch (excError)
    {
        alert("pacific.js::IsValidEmailAddress()\n"
			 + excError.name + ', ' + excError.message);
    }
    return blnIsValidEmailAddress;
}

// ----------------------------------------------------------------------------
// Name: IsValidPhoneNumber
// Abstract: Validate the phone number format
// ----------------------------------------------------------------------------
function IsValidPhoneNumber(strPhoneNumber)
{
    var blnIsValidPhoneNumber = false;
  
    try
    {
        var strStart = "^";
        var strStop = "$";
        var strSpaceDashOrDot = "[\\s\\-\\.]";
        var strPattern1 = "";
        var strPattern2 = "";
        var strPattern3 = "";
        var rgxPattern1 = null;
        var rgxPattern2 = null;
        var rgxPattern3 = null;
    
        // ###-####
        strPattern1 = strStart
                    + "\\d{3}" + strSpaceDashOrDot + "\\d{4}"
                    + strStop;

        // ###-###-####
        strPattern2 = strStart
                    + "\\d{3}" + strSpaceDashOrDot + "\\d{3}" + strSpaceDashOrDot + "\\d{4}"
                    + strStop;

        // (###)###-####
        strPattern3 = strStart
                    + "\\(\\d{3}\\)" + strSpaceDashOrDot + "\\d{3}" + strSpaceDashOrDot + "\\d{4}" 
                    + strStop;

        // Declare the RegExp instances
        rgxPattern1 = new RegExp(strPattern1);
        rgxPattern2 = new RegExp(strPattern2);
        rgxPattern3 = new RegExp(strPattern3);
       
        // Test the phone number against the regular expressions
        if (rgxPattern1.test(strPhoneNumber) == true ||
            rgxPattern2.test(strPhoneNumber) == true ||
            rgxPattern3.test(strPhoneNumber) == true)
        {
            // Match; data is valid
            blnIsValidPhoneNumber = true;
        }
    }
    catch (excError)
    {
        alert("pacific.js::IsValidPhoneNumber()\n"
			 + excError.name + ', ' + excError.message);
    }
    return blnIsValidPhoneNumber
}

// ----------------------------------------------------------------------------
// Name: IsValidArrivalDate
// Abstract: Was a valid date chosen 
// ----------------------------------------------------------------------------
function IsValidArrivalDate(dtmTarget)
{
	var blnIsValid = false;
	
	try
	{		
		var dtmDateNow = new Date();		
		var dtmArrivalDate = new Date(dtmTarget);
		var dtmMillisecondsPerDay = 1000 * 60 * 60 * 24;
		var intDaysDifference = 0;
				
		// Calculate difference between now & arrival date
		intDaysDifference = (Math.ceil((dtmArrivalDate.getTime() - dtmDateNow.getTime())/dtmMillisecondsPerDay));				
			
		// Arrival date on/after today?
		if (intDaysDifference >= 0)
		{
			// Yes; valid date
			blnIsValid = true;
		}
	}
	catch (excError)
	{
		alert("pacific.js::IsValidDate()\n"
			 + excError.name + ', ' + excError.strValue);
	}	
	return blnIsValid;	
}

// ----------------------------------------------------------------------------
// Name: IsValidCreditCardNumber
// Abstract: Is the card number valid
// Uses Luhn algorithm 
// ----------------------------------------------------------------------------
function IsValidCreditCardNumber(strCreditCardNumber) 
{
	var blnIsValid = false;
	try
	{				
		var charDigit = 0;
		var intDigit = 0;		
		var blnCharPositionIsEven = false;	// Char positioning indicator (odd/even)
		var intIndex = 0;
		var intTotal = 0; 
				
		// Loop through card number from back to front
		for (intIndex = strCreditCardNumber.length - 1; intIndex >= 0; intIndex -= 1) 
		{
			// Get each char digit and parse to integer
			charDigit = strCreditCardNumber.charAt(intIndex);
			intDigit = parseInt(charDigit, 10);

			// Change processing of number based upon even/odd positioning of char in string
			if (blnCharPositionIsEven == true) 
			{
				if ((intDigit *= 2) > 9) 
				{
					intDigit -= 9;
				}
			}

			// Accumulate total
			intTotal += intDigit;
			
			// Change positioning indicator
			if (blnCharPositionIsEven == true) blnCharPositionIsEven = false;
			else blnCharPositionIsEven = true;
		}
		
		// Evenly divisible by 10?
		if (intTotal % 10 == 0)
		{
			// Yes; valid number
			blnIsValid = true;
		}
	}
	catch (excError)
	{
		alert("pacific.js::IsValidCreditCardNumber()\n"
			 + excError.name + ', ' + excError.strValue);
	}
	return blnIsValid;
}




