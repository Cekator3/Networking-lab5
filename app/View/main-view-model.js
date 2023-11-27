import {Frame, Observable} from '@nativescript/core'

function startUrlCats()
{
    Frame.topmost().navigate('/View/UrlCats/UrlCats');
}

function startCatsWords()
{
    Frame.topmost().navigate('/View/CatsWords/CatsWords');
}

export function createViewModel()
{
    const viewModel = new Observable();
    viewModel.startUrlCats = startUrlCats;
    viewModel.startCatsWords = startCatsWords;
    return viewModel;
}
