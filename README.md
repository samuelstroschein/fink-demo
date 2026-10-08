# Fink demo: Acme Files

A small SvelteKit-style app with [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) messages, for testing [Fink](https://github.com/opral/inlang-fink). The project lives in `project.inlang`, the messages in `messages/{locale}.json` (English, German, Russian, Japanese and French). The app code under `src/` exists so Fink can show where each message is used.

## What to try

| Message | Case |
| --- | --- |
| `upload_hint` | Missing in German and Russian |
| `storage_used` | German drops `{total}`; French misspells it as `{totl}` ("Did you mean {total}?") |
| `api_hint` | German lost the link on "docs" (select words and choose "Link like “docs”") |
| `welcome_back` | French lost the bold around `{name}` ("Make {name} bold") |
| `files_remaining` | Russian is missing the "many" form (0, 5–20…); Japanese has no translation yet |
| `file_sent_activity` | Gender × count: Russian is missing "male · many" |
| `files_selected` | Russian uses one text for every number ("Split by {count}") |
| `invites_sent` | Plural with bold, a link and two variables, missing in four languages ("Start from English") |
| `upload_rank` | Ordinal plural (1st, 2nd, 3rd); German uses one sentence |
| `legacy_banner` | Not used anywhere in the code |
| `nav_settings`, `save`, … | Complete in every language |

Open it in Fink: https://fink-pr-83.opral.workers.dev/?repo=https%3A%2F%2Fgithub.com%2Fsamuelstroschein%2Ffink-demo&branch=main&project=project.inlang
