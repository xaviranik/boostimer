# Boostimer Maintenance Roadmap

This roadmap tracks maintenance work that helps keep Boostimer reliable for WooCommerce store owners and easier to contribute to as an open-source project.

## Near-term maintenance priorities

### WordPress and WooCommerce compatibility

- Verify Boostimer against the latest supported WordPress and WooCommerce versions.
- Document the local test matrix for supported PHP, WordPress, WooCommerce, and WooCommerce Subscriptions versions.
- Keep `README.md`, `readme.txt`, plugin headers, and package metadata in sync for each release.

### Automated quality checks

- Add or refresh CI for PHP linting, PHPCS, JavaScript linting, and production builds.
- Expand PHPUnit coverage for timer scheduling, product availability state transitions, and metadata handling.
- Add smoke tests for simple, variable, external/affiliate, and subscription products.

### Security and dependency review

- Review PHP and JavaScript dependencies for abandoned or vulnerable packages.
- Audit REST/API usage, nonce checks, sanitization, escaping, and capability checks.
- Document a lightweight security review checklist for releases.

### Release workflow

- Make release preparation repeatable with a checklist for version bumps, changelog updates, build artifacts, and WordPress.org readme updates.
- Add release notes that explain compatibility changes and any migration notes for store owners.
- Keep contribution guidance aligned with the current build and test workflow.

## Potential Codex-assisted workflows

Codex can help maintainers and contributors by:

- Drafting focused issues from maintenance goals.
- Reviewing pull requests for regressions, missing tests, and documentation gaps.
- Generating test cases around WooCommerce product-type behavior.
- Explaining legacy code paths before refactors.
- Producing release-note drafts from merged pull requests.
- Helping triage compatibility issues reported by WordPress/WooCommerce users.

## Contribution areas

Contributors are welcome to help with:

- Compatibility testing against current WordPress and WooCommerce releases.
- Test coverage for sale and restock countdown behavior.
- Documentation improvements.
- Dependency updates.
- Bug reports with reproduction steps and environment details.
