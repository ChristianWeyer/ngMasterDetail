powershell.exe -executionpolicy bypass -file .\BuildWindows8.ps1 -ProjectName "myProductsWin8" -ProjectFolder "..\src\myProducts.Web\client" -BuildFolder "out\windows8" -AppName "com.thinktecture.myproducts" -IncludeWinJS "false" -Url "http://localhost/ngmd/client/"