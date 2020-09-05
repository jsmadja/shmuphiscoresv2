import {action} from '@storybook/addon-actions';
import CopyableCode from "../../src/components/atoms/CopyableCode";

export default {
    title: "Atom/CopyableCode",
};
export const copy = () => ({
    components: {CopyableCode},
    template: `
        <copyable-code title="Forum Code" code="[b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] " @copy="onCopy" />`,
    methods: {
        onCopy: action('copy'),
    },
});

export const longText = () => ({
    components: {CopyableCode},
    template: `
        <copyable-code title="Forum Code" code="[b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b] " @copy="onCopy" />`,
    methods: {
        onCopy: action('copy'),
    },
});
