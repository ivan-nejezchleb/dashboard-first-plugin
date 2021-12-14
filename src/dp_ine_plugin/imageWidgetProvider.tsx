import React from "react";
import {IDashboardInsightProps, OptionalInsightComponentProvider} from "@gooddata/sdk-ui-dashboard";
import { IInsightWidget } from "@gooddata/sdk-backend-spi";
import { IInsight } from "@gooddata/sdk-model";

function image(_props: IDashboardInsightProps): JSX.Element {
    return <img src="https://www.superzoo.cz/db/wysiwyg/Image/clanky/kote-clanek.jpg" />;
}

export const imageWidgetProvider: OptionalInsightComponentProvider = (_insight: IInsight, widget: IInsightWidget) => {
    if(widget.title === "image") {
        return image;
    }
    return undefined;
}
