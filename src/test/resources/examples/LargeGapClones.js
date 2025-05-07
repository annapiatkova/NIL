// Large-gap clone example from CCAligner's paper
class LargeGapClones {
    method1(cmd) {
        try {
            let exe = new Execute(new LogStreamHandler(this, Project.MSG_INFO, Project.MSG_WARN));
            exe.setAntRun(getProject());
            exe.setWorkingDirectory(getProject().getBaseDir());
            exe.setCommandline(cmd.getCommandline());
            exe.setVMLauncher(false);
            return exe.execute();
        } catch (e) {
            throw new Error('BuildException in ' + getLocation());
        }
    }

    method2(cmd) {
        try {
            let exe = new Execute(new LogStreamHandler(this, Project.MSG_INFO, Project.MSG_WARN));
            // Gap is from here
            if (serverPath !== null) {
                let env = exe.getEnvironment();
                if (env === null) {
                    env = [];
                }
                let newEnv = env.concat("SSDIR=" + servePath);
                exe.setEnvironment(newEnv);
            }
            // to here
            exe.setAntRun(getProject());
            exe.setWorkingDirectory(getProject().getBaseDir());
            exe.setCommandline(cmd.getCommandline());
            exe.setVMLauncher(false);
            return exe.execute();
        } catch (e) {
            throw new Error('BuildException in ' + getLocation());
        }
    }
}