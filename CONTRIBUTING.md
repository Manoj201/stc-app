## Git Related

1. Namespace branches accordingly,
	- `rnd/<feature_name>`
	- `architecture/<feature_name>`
	- `feature/<feature_name>`
	- `bug/<feature_name>-<bug_id>`

2. Have separate branches for individual features and merge once tested and finalized.
3. If a multiple feature has common components, push them first before the feature is finalized so everyone can re-use them and avoid duplicate code.

## Code Related

1. Lets follow defined eslint rules and avoid pushing code without resolving them as much as possible.
2. Keep code as modular and loosely coupled as much as possible and follow the Screen, Container, Component approach
 	- **Screen** - Top most wrapper for a screen
	- **Container** - Will be used to partition a screen into re-usable and maintainable sections and must be statefull always *Not mandatory
	- **Component** - Mostly used for presentational components [Always will be stateless components]
3. Imports should always be ordered as external dependancies first and local dependancies following
4. Always use the .env for environmentally dependent configurations
5. Always refer from the theme folder colors, metrics and base styles [Example in App.styles.js]
6. Always keep data related transformations and business logic to services
7. For action types always define them in a types.js and reuse them. And follow naming convention
	- `<Request_type>_<Entity>_BY_<Params>`
	Eg:- GET_ACCOUNT_BY_ID
