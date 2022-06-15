import { Widget as PhosphorWidget } from "@phosphor/widgets";
import { CommandRegistry as PhosphorCommandRegistry } from "@phosphor/commands";
import { Widget as LuminoWidget } from "@lumino/widgets";
import { CommandRegistry as LuminoCommandRegistry } from "@lumino/commands";
import { GLUE_DATABREW_RENDER } from "./constants";

export class PhosphorLeftSideLauncher extends PhosphorWidget {
  /**
   * Command Registry
   */
  commands: PhosphorCommandRegistry;
  handleLaunchButtonClicked(): undefined {
    this.commands.execute(GLUE_DATABREW_RENDER);
    return;
  }
}

export class LuminoLeftSideLauncher extends LuminoWidget {
  /**
   * Command Registry
   */
  commands: LuminoCommandRegistry;
  handleLaunchButtonClicked(): undefined {
    this.commands.execute(GLUE_DATABREW_RENDER);
    return;
  }
}

export class LeftSideLauncher {
  static create(commands: LuminoCommandRegistry): PhosphorLeftSideLauncher | LuminoLeftSideLauncher {
    const widget = new LuminoLeftSideLauncher();
    widget.commands = commands;

    const launchButton = document.createElement("div");
    const header = document.createElement("header");
    header.className = "aws_glue_databrew_header";
    header.textContent = "MLFlow";

    launchButton.title = "Welcome to AWS SageMaker Studio / MLflow integration";
    launchButton.id = "aws_glue_databrew_launch_button";
    launchButton.textContent = "Access MLFlow";

    launchButton.onclick = widget.handleLaunchButtonClicked.bind(widget);

    widget.node.appendChild(header);
    widget.node.appendChild(launchButton);
    widget.id = "aws_glue_databrew_jupyter_left_side_launcher";
    widget.title.iconClass = "jp-databrew-logo jp-SideBar-tabIcon";
    widget.title.caption = "MLFlow";

    return widget;
  }
}
