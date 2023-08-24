import {h} from "vue"

export default(props, context) => h("p",
    {class: "text-base md:text-base leading-relaxed slg:text-20px slg:leading-8"},
    context.slots.default()
)