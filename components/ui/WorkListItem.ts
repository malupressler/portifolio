import {h} from "vue";

export default(props, context) => {
    const {name, position, link, to, from} = props.work;
    return h("a", {
        class: 'flex flex-col',
        href: link,
    }, [
        h("span", {class: 'font-theme_bold text-head_text'}, `Interprise: ${name}`),
        h("span", {class: 'text-sm sm:text-base'}, `Position: ${position}`),
        h("span", {class: 'text-sm sm:text-base'}, `from: ${from} - to: ${to}`),
        h("span", {class: 'sm:gap-6'}),
    ])
}