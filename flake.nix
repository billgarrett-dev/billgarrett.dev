{
  description = "A personal website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        projectname = "billgarrett.dev";
        projectpkgs = [
          pkgs.nodejs
        ];
      in
      {
        packages.default = pkgs.stdenvNoCC.mkDerivation {
          name = projectname;
          nativeBuildInputs = projectpkgs;
          src = self;
          buildPhase = ''
            deno compile main.ts
            
          '';
          installPhase = ''
            mkdir $out
            cp $name $out/
          '';
        };
        devShell = pkgs.mkShell {
          name = projectname;
          packages = projectpkgs;
        };
      }
    );
}