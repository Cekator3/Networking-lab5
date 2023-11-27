import {createViewModel} from "./CatsWords-view-model";

export function onNavigatingTo(args)
{
    const page = args.object;
    page.bindingContext = createViewModel(page);
}
