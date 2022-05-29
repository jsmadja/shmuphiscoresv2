import {action} from '@storybook/addon-actions';
import GameSettingForm from "../../../src/components/atoms/GameSettingForm.vue";

export default {
    title: "Atom/GameSettingForm",
};

const methods = {
    create: action('create')
};

export const withValues = () => ({
    components: {GameSettingForm},
    template: `<game-setting-form settingName="mode" :values="['Arcade']" @create="create" />`,
    methods,
});

export const withoutValues = () => ({
    components: {GameSettingForm},
    template: `<game-setting-form settingName="mode" :values="[]" @create="create" />`,
    methods,
});
