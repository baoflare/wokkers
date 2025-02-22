import {
	CopyButton,
	Slot,
	Slottable,
	WithTooltip,
	cn,
} from "@rivet-gg/components";
import { Icon, faTag } from "@rivet-gg/icons";
import { type ReactNode, forwardRef } from "react";

const BUILT_IN_TAGS = ["current", "rivet/latest", "enabled", "rivet/enabled"];

export const ActorTag = forwardRef<
	HTMLSpanElement,
	{ children: ReactNode; className?: string }
>(({ children, className, ...props }, ref) => (
	<Slot ref={ref} className={className} {...props}>
		<Icon className="mr-1" icon={faTag} />
		<Slottable>{children}</Slottable>
	</Slot>
));

interface ActorTagsProps {
	tags?: unknown;
	excludeBuiltIn?: boolean;
	className?: string;
	truncate?: boolean;
}

export function ActorTags({
	tags = {},
	excludeBuiltIn = false,
	truncate = true,
	className,
}: ActorTagsProps) {
	return (
		<div
			className={cn(
				"flex flex-wrap gap-4 gap-y-2 empty:hidden text-muted-foreground text-xs font-mono",
				className,
			)}
		>
			{tags && typeof tags === "object"
				? Object.entries(tags)
						.filter(([key]) =>
							excludeBuiltIn
								? !BUILT_IN_TAGS.includes(key)
								: true,
						)
						.sort(([a], [b]) => a.localeCompare(b))
						.map(([key, value]) =>
							truncate ? (
								<WithTooltip
									key={key}
									content={`${key}=${value}`}
									trigger={
										<CopyButton value={`${key}=${value}`}>
											<ActorTag className="flex-shrink-0 truncate max-w-52 cursor-pointer">
												<button type="button">
													{key}={value}
												</button>
											</ActorTag>
										</CopyButton>
									}
								/>
							) : (
								<ActorTag key={key} className="flex-shrink-0">
									<span>
										{key}={value}
									</span>
								</ActorTag>
							),
						)
				: null}
		</div>
	);
}
