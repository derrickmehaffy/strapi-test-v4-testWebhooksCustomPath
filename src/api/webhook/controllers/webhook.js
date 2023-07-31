"use strict";

module.exports = ({ strapi }) => ({
  async trigger(ctx) {
    console.log("I am a teapot");
    return {
      ok: true,
    };
  },
});
