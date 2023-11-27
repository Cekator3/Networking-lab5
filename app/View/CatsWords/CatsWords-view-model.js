import {Observable} from "@nativescript/core";

let catImageText;
const viewModel = new Observable();
const CAT_IMAGE_TEXT_COLOR = 'white';
const CAT_IMAGE_FONT_SIZE = 40;

function generateUrl(text)
{
    return `https://cataas.com/cat/says/${text}?fontColor=${CAT_IMAGE_TEXT_COLOR}&fontSize=${CAT_IMAGE_FONT_SIZE}`;
}

function updateCatImage()
{
    const text = catImageText.text;
    viewModel.set('catImageUrl', generateUrl(text + '.'));
    viewModel.set('catImageUrl', generateUrl(text));
}

export function createViewModel(page)
{
    catImageText = page.getViewById("catImageText");
    catImageText.set('text', 'Привет');
    viewModel.updateCatImage = updateCatImage;
    updateCatImage();
    return viewModel;
}

