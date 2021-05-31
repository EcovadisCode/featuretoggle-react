import flagsmith from "flagsmith";

export const flagsmithClient = ({
  environmentID,
}) => ({
  init: handler => {
    const featureToggles = {};
    flagsmith.init({
      environmentID,
      onChange: (oldFlags, params) => {
        flagsmith.getFlags()
          .then(flags => {
            console.log(flags); // eslint-disable-line
          });
        handler(featureToggles);
      }
    });
  },
});
