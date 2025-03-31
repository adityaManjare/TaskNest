import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";

@Injectable()
export class UserOwnerGuard implements CanActivate { // can activate khud ka guard banane ke liye
    canActivate(context: ExecutionContext): boolean { // executioncontect to get the request 
        const request = context.switchToHttp().getRequest(); // got the request
        const user = request.user;//(see here i am extracting authenticated(via jwt) user) even though i didnt reuturned user in jwt strategy but i the object returned was stored in request.user 
        const requestedUserId = parseInt(request.params.userId); // Extract user ID from URL 

        if ( (!user || user.id !== requestedUserId ) &&user.id !== 1) {
            throw new ForbiddenException("your login id and parameters user id must be same");
        }

        return true; 
    }
}

// to ddo admin login 