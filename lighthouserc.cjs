module.exports = {
  ci: {
    collect: { url: ["http://127.0.0.1:3001/", "http://127.0.0.1:3001/women", "http://127.0.0.1:3001/admin"], numberOfRuns: 1 },
    assert: { preset: "lighthouse:recommended", assertions: { "categories:performance": ["error", { minScore: 0.9 }], "categories:accessibility": ["error", { minScore: 0.9 }], "categories:best-practices": ["error", { minScore: 0.9 }], "categories:seo": ["error", { minScore: 0.9 }] } },
    upload: { target: "temporary-public-storage" },
  },
};
