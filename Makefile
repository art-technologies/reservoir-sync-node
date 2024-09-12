pbjs:
	./node_modules/protobufjs-cli/bin/pbjs -t static-module -w commonjs -o ./src/pb/reservoir.js ./proto/reservoir.proto
	./node_modules/protobufjs-cli/bin/pbts -o ./src/pb/reservoir.d.ts ./src/pb/reservoir.js
