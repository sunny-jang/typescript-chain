interface Config {
    url: string
}

declare module "myPacakge" {
    function init(config: Config): boolean;
    function exit(config: Config): boolean;
}