import {Observable} from "@nativescript/core";

const viewModel = new Observable();
let requestQueryTextField;
let httpResponseCodeImage;

function updateHttpResponseCodeImage(responseCode)
{
    httpResponseCodeImage.set('src', `https://http.cat/${responseCode}`);
}

function sendRequest()
{
    let requestQuery = `https://${requestQueryTextField.text}`;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', requestQuery);
    httpRequest.send();
    httpRequest.onreadystatechange = function()
    {
        if (httpRequest.readyState < 2)
            return;
        console.log(httpRequest.status);
        if (httpRequest.status === null)
            updateHttpResponseCodeImage(404);
        else
            updateHttpResponseCodeImage(httpRequest.status);
    };
}


export function createViewModel(page)
{
    requestQueryTextField = page.getViewById("requestQueryTextField");
    httpResponseCodeImage = page.getViewById("httpResponseCodeImage");
    viewModel.sendRequest = sendRequest;
    return viewModel;
}
