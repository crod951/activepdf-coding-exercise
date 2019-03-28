' Copyright (c) 2019 ActivePDF, Inc.
' ActivePDF Toolkit 2018
' Example generated 03/21/19 

Dim FSO, strPath, intImageToPDF

' Get current path
Set FSO = CreateObject("Scripting.FileSystemObject")
strPath = FSO.GetFile(Wscript.ScriptFullName).ParentFolder & "\"
Set FSO = Nothing

' Instantiate Object
Set oTK = CreateObject("APToolkit.Object")

' Any supported image file can be converted to PDF with ImageToPDF
intImageToPDF = oTK.ImageToPDF(strPath & "IMG.jpg", strPath & "IMG.pdf")
If intImageToPDF <> 1 Then
  ErrorHandler "ImageToPDF", intImageToPDF
End If

' Release Object
Set oTK = Nothing

' Process Complete
Wscript.Echo("Done!")

' Error Handling
Sub ErrorHandler(method, outputCode)
  Wscript.Echo("Error in " & method & ": " & outputCode)
End Sub