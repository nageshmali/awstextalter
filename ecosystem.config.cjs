// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "textalter",
      script: "npm",
      args: "run dev -- --host 0.0.0.0 --port 5173",
      interpreter: "none",
      watch: false,
    },
  ],
};
