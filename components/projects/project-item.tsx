import Image from "next/legacy/image"
import { File, RichText, Title, ResultType, MultiSelectOption } from "@/Type";

interface DataType{
    data: {
        id: string;
        cover: {
            file: File;
        };
        properties: {
            WorkPeriod: {
                rich_text: RichText[];
            };        
            Link:{
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
    };
}

export default function ProjectItem({data}: DataType){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.rich_text[0].plain_text
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url
    const link = data.properties.Link.rich_text[0].plain_text
    const Tags = data.properties.Tags.multi_select
    const period = data.properties.WorkPeriod.rich_text[0].plain_text

    return(
        <div className="project-card">
                <Image
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="cover image"
                    width={100}
                    height={60}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
                <div className="p-4 flex flex-col">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <h3 className="text-lg mt-1">{description}</h3>
                    <hr className="my-2"/>
                    <a href={github} className="mb-1">깃허브 바로가기</a>
                    <a href={link} target="_blank" className="mb-1">배포 링크 바로가기</a>
                    <p className="mb-2">작업 기간 : {period}</p>
                    <div className="flex items-start">
                        {Tags.map((aTag : MultiSelectOption) => (
                            <h1 
                                className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-xs"
                                key={aTag.id}>
                                {aTag.name}
                            </h1>
                        ))}
                    </div>
                </div>
        </div>
    )
}