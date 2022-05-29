import {action} from '@storybook/addon-actions';
import MyProfileTemplate from "../../../src/components/templates/MyProfileTemplate.vue";
import superadmin from "../data/user.superadmin";

export default {
    title: "Template/MyProfile",
};
const methods = {
    copy: action('copy'),
};

export const defaultTemplate = () => ({
    components: {MyProfileTemplate},
    template: `<my-profile-template :user="user" @copy="copy" />`,
    data: () => ({ user: superadmin }),
    methods,
});

