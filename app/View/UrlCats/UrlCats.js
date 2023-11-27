import {createViewModel} from "~/View/UrlCats/UrlCats-view-model";

export function onNavigatingTo(args)
{
    const page = args.object;
    page.bindingContext = createViewModel(page);
}
