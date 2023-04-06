export interface File {
    url: string;
}

export interface RichText {
    plain_text: string;
}

export interface Title {
    plain_text: string;
}

export interface ResultType {
    id: string;
    cover: {
        file: File;
    };
    properties: {
        WorkPeriod: {
            rich_text: RichText[];
        };
        Tags: {
            multi_select: MultiSelectOption[];
        };
        Github: {
            rich_text: RichText[];
        };
        Description: {
            rich_text: RichText[];
        };
        Name: {
            title: Title[];
        };
    };
}

export interface MultiSelectOption {
    id: string;
    name: string;
    color: string;
}