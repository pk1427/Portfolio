import { SectionHeading } from "@/components/layout/section-heading"
import { buildBattles } from "@/lib/content/milestones"
import { sectionIds } from "@/lib/content/site"

function BattleRow({
  title,
  meta,
  description,
  highlight,
}: {
  title: string
  meta: string
  description: string
  highlight?: string
}) {
  return (
    <li className="screen-line-bottom relative last:after:hidden">
      <div className="flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
        <span
          aria-hidden
          className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
        />

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="min-w-0 text-base leading-snug font-medium text-balance">
              {title}
            </h3>
            <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
              {meta}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          {highlight && (
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {highlight}
            </p>
          )}
        </div>
      </div>
    </li>
  )
}

export function BuildBattles() {
  return (
    <section aria-labelledby={sectionIds.buildBattles}>
      <SectionHeading id={sectionIds.buildBattles}>Build Battles</SectionHeading>

      <ul className="pt-px">
        {buildBattles.map((item) => (
          <BattleRow
            key={item.id}
            title={item.title}
            meta={item.date}
            description={item.description}
            highlight={item.highlight}
          />
        ))}
      </ul>
    </section>
  )
}

export default BuildBattles
