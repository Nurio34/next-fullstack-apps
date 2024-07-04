import {
    CloudinaryResourceType,
    DefaultTransformationsType,
    FilterObjectType,
    FilterType,
} from "@/app/google-photos/types";
import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    reArrangeTransformations,
    setCropTransformations,
    setFilter,
    setFilterTransformations,
} from "@/providers/reduxjs-provider/slices/tab";
import { CldImage } from "next-cloudinary";

function FilterTab({ resource }: { resource: CloudinaryResourceType }) {
    const filters: Array<{ id: FilterType; filter: FilterObjectType }> = [
        { id: "none", filter: {} },
        { id: "assistColorblind", filter: { assistColorblind: true } },
        { id: "blackwhite", filter: { blackwhite: true } },
        { id: "brightness", filter: { brightness: true } },
        { id: "brightnessHSB", filter: { brightnessHSB: true } },
        { id: "cartoonify", filter: { cartoonify: true } },
        { id: "gradientFade", filter: { gradientFade: true } },
        { id: "grayscale", filter: { grayscale: true } },
        { id: "negate", filter: { negate: true } },
        { id: "pixelate", filter: { pixelate: true } },
        { id: "sanitize", filter: { sanitize: true } },
        { id: "sepia", filter: { sepia: true } },
        { id: "simulateColorblind", filter: { simulateColorblind: true } },
        { id: "tint", filter: { tint: true } },
        { id: "vignette", filter: { vignette: true } },
    ];

    const { transformations, filter } = useAppSelector((s) => s.tab);
    const defauldTransformations: DefaultTransformationsType =
        Object.fromEntries(
            Object.entries(transformations).filter(
                ([key, _]) =>
                    key === "crop" ||
                    key === "width" ||
                    key === "height" ||
                    key === "improve" ||
                    key === "restore" ||
                    key == "removeBackground",
            ),
        );
    const filteredTransformation = Object.fromEntries(
        Object.entries(transformations).filter(([key, _]) => key === "crop"),
    );

    const dispatch = useAppDispatch();

    return (
        <div className="py-[1vh]">
            <h2>Filters</h2>
            <ul className="grid gap-y-[1vh] gap-x-[1vw] grid-cols-3 py-[1vh]">
                {filters.map((filterObj) => {
                    return (
                        <li
                            key={resource.public_id}
                            className={`relative aspect-square transition-all ${
                                filterObj.id === filter &&
                                "border-4 border-primary scale-110 "
                            } `}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(
                                        reArrangeTransformations(
                                            defauldTransformations,
                                        ),
                                    );
                                    dispatch(
                                        setFilterTransformations(
                                            filterObj.filter,
                                        ),
                                    );
                                    dispatch(setFilter(filterObj.id));
                                }}
                            >
                                <CldImage
                                    priority
                                    key={resource.asset_id}
                                    src={resource.public_id}
                                    alt={resource.display_name}
                                    fill
                                    {...filteredTransformation}
                                    {...filterObj.filter}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FilterTab;
