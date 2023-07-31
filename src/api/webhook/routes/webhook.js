module.exports = {
  routes: [
    {
      method: "POST",
      path: "/webhooks/custom/github",
      handler: "api::webhook.webhook.trigger",
      config: {
        auth: false,
      },
    },
  ],
};
