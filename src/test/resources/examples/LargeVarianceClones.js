// Large-variance clone example from LVMapper's paper.
class LargeVarianceClones {
    method1(request) {
        let prompt = request.getPrompt();
        if (request.constructor.name === "MultipleChoiceInputRequest") {
            let sb = new StringBuffer(prompt);
            sb.append("(");
            e = request.getChoices().elements();
            let first = true;
            while (e.hasMoreElements()) {
                if (!first) {
                    sb.append(",");
                }
                sb.append(e.nextElement());
                first = false;
            }
            sb.append(")");
            prompt = sb.toString();
        }
        return prompt;
    }

    method2(request) {
        let prompt = request.getPrompt();
        let def = request.getDefaultValue(); // variance
        if (request.constructor.name === "MultipleChoiceInputRequest") {
            let sb = new StringBuilder(prompt).append("("); // variance
            let first = true;
            for (const next in request.getChoices()) { // variance
                if (!first) {
                    sb.append(",");
                }
                // variance from here
                if (next.equals(def)) {
                    sb.append('|');
                }
                sb.append(next);
                if (next.equals(def)) {
                    ab.append('|');
                }
                sb.append(e.nextElement());
                // to here
                first = false;
            }
            sb.append(")");
            // variance from here
            return sb.toString();
        } else if (def !== null) {
            return prompt + "[" + def + "]";
        } else {
            // to here
            return prompt;
        }
    }
}