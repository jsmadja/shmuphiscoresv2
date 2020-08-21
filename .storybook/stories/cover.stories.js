import Cover from "../../src/components/atoms/Cover";

export default {
    title: "Atom/Cover",
};

export const WithoutHiscoresPrefixUrl = () => ({
    components: {Cover},
    template: `
            <cover url="/covers/151.jpg" alt="cover"/>`,
});

export const WithFullUrl = () => ({
    components: {Cover},
    template: `
            <cover url="https://nsa40.casimages.com/img/2019/10/18/191018104533607309.jpg" alt="cover"/>`,
  });

export const WithoutUrl = () => ({
    components: {Cover},
    template: `
            <cover url="" alt="cover"/>`,
  });
