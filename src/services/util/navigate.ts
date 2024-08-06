import { ApplicationRoutes } from "../../shared/enum/applicationRoutes";

const { ROOT } = ApplicationRoutes;

export const navigateToRoot = () => window.history.replaceState(null, "", ROOT);
