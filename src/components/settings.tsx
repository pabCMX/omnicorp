import { Button } from "@/components/ui/button";
import { useRunStore } from "@/store/runStore";
import { useUiStore } from "@/store/uiStore";

export function Settings() {
  const { settings, setSettings } = useUiStore();
  const { run, setRun } = useRunStore();
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showNews: !settings.showNews })}
      >
        {settings.showNews ? "Hide News" : "Show News"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showMarketMovers: !settings.showMarketMovers })}
      >
        {settings.showMarketMovers ? "Hide Market Movers" : "Show Market Movers"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showPortfolio: !settings.showPortfolio })}
      >
        {settings.showPortfolio ? "Hide Portfolio" : "Show Portfolio"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showDetailView: !settings.showDetailView })}
      >
        {settings.showDetailView ? "Hide Detail View" : "Show Detail View"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showDebug: !settings.showDebug })}
      >
        {settings.showDebug ? "Hide Debug" : "Show Debug"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showHelp: !settings.showHelp })}
      >
        {settings.showHelp ? "Hide Help" : "Show Help"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showCredits: !settings.showCredits })}
      >
        {settings.showCredits ? "Hide Credits" : "Show Credits"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, showTutorial: !settings.showTutorial })}
      >
        {settings.showTutorial ? "Hide Tutorial" : "Show Tutorial"}
      </Button>
      <Button
        className="mt-4"
        onClick={() => setRun({ ...run, tickSpeed: run.tickSpeed + 1 })}
      >
        Increase ticks per second
      </Button>
      <Button
        className="mt-4"
        onClick={() => setRun({ ...run, tickSpeed: run.tickSpeed - 1 })}
      >
        Decrease ticks per second
      </Button>
      <Button
        className="mt-4"
        onClick={() =>
          setSettings({ ...settings, autoSaveInterval: settings.autoSaveInterval + 1 })
        }
      >
        Increase Auto Save Interval
      </Button>
      <Button
        className="mt-4"
        onClick={() =>
          setSettings({ ...settings, autoSaveInterval: settings.autoSaveInterval - 1 })
        }
      >
        Decrease Auto Save Interval
      </Button>
      <Button
        className="mt-4"
        onClick={() => setSettings({ ...settings, autoSaveEnabled: !settings.autoSaveEnabled })}
      >
        {settings.autoSaveEnabled ? "Disable Auto Save" : "Enable Auto Save"}
      </Button>
    </div>
  );
}
