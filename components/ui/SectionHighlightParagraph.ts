import {h} from "vue"

export default(props, context) => h("p",
    {class: "text-lg md:text-lg font-theme_bold text-second_higlight_subtitle slg:text-lg slg:leading-8"},
    context.slots.default()
)