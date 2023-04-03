import Image from "next/legacy/image"

interface DataType {
    data : {
        id: string,
        cover: {
            file: {
                url: string,
            }
        },
        properties: {
            WorkPeriod: {
                rich_text: [
                    {
                        plain_text: string,
                    }
                ]
            },
            Tags: {
                multi_select: object[],
            },
            Github: {
                rich_text: [
                    {
                        plain_text: string,
                    }
                ]
            },
            Description:{
                rich_text: [
                    {
                        plain_text: string,
                    }
                ]
            }
            Name: {
                title: [{
                    plain_text: string,
                }];
            };
        };
    }
}

interface TagType{
    aTag : {
        id: string,
        name: string,
    }
}

export default function ProjectItem({data}: DataType){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.rich_text[0].plain_text
    // const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url
    const Tags = data.properties.Tags.multi_select
    const period = data.properties.WorkPeriod.rich_text[0].plain_text

    return(
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout={"responsive"}
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                {/* <h3 className="mt-4 text-xl">{description}</h3> */}
                <a href={github}>깃허브 바로가기</a>
                <p className="my-1">작업 기간 : {period}</p>

                <div className="flex items-start mt-2">
                    {Tags.map((aTag: TagType)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-xs" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}