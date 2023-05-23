import { Button } from "./Button";

type User = {
    name: string;
}

interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
    <header className="border-b border-gray-900 flex items-center justify-between">
        <div>
            <div>
                <h1 className="font-bold text-xl mt-2 mr-0 mb-2 ml-3">Logo</h1>
            </div>
        </div>
        <div>
            {user ? (
                <>
                    <span className="welcome">
                        Welcome, <b data-test-id="username">{user.name}</b>!
                    </span>
                    <Button size="small" onClick={onLogout} label="Log out" className="mr-4 ml-2" />
                </>
            ) : (
                <>
                    <Button size="small" onClick={onLogin} label="Log in" />
                    <Button primary size="small" onClick={onCreateAccount} label="Sign up" className="mr-4 ml-2" />
                </>
            )}
        </div>
    </header>
)