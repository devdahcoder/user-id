# Deployment Guide for Vercel

## Issue Resolution

The 404 error you encountered is a common issue with Single Page Applications (SPAs) deployed to Vercel. This happens because:

1. **Client-side Routing**: React Router handles routing on the client side
2. **Server-side Navigation**: When users navigate directly to `/users` or refresh the page, Vercel looks for a file at that path
3. **Missing Configuration**: Without proper configuration, Vercel returns 404 for client-side routes

## Solutions Implemented

### 1. Vercel Configuration (`vercel.json`)

```json
{
	"rewrites": [
		{
			"source": "/(.*)",
			"destination": "/index.html"
		}
	]
}
```

This tells Vercel to serve `index.html` for all routes, allowing React Router to handle the routing.

### 2. Alternative Solution (`public/_redirects`)

```
/*    /index.html   200
```

This is a Netlify-style redirect file that Vercel also supports.

### 3. Vite Configuration Updates

-   Added proper build configuration
-   Optimized chunk splitting
-   Disabled source maps for production

## Deployment Steps

1. **Commit your changes**:

    ```bash
    git add .
    git commit -m "Fix Vercel routing configuration"
    git push
    ```

2. **Redeploy on Vercel**:

    - Go to your Vercel dashboard
    - Trigger a new deployment
    - Or push to your main branch to auto-deploy

3. **Verify the fix**:
    - Navigate directly to `/users`
    - Refresh the page on `/users`
    - Test other routes

## Additional Recommendations

### Environment Variables

If you have any environment variables, make sure to add them in your Vercel project settings.

### Build Optimization

The updated Vite config includes:

-   Vendor chunk splitting for better caching
-   Disabled source maps for smaller bundle size
-   Proper output directory configuration

### Monitoring

After deployment, monitor your Vercel analytics to ensure:

-   No more 404 errors
-   Proper page load times
-   Successful route navigation

## Troubleshooting

If you still encounter issues:

1. **Clear Vercel cache**: In your Vercel dashboard, go to Settings → General → Clear Cache
2. **Check build logs**: Ensure the build completes successfully
3. **Verify file structure**: Make sure `vercel.json` is in the root directory
4. **Test locally**: Run `npm run build && npm run preview` to test the production build

## Alternative Platforms

If you prefer other hosting platforms:

-   **Netlify**: Use `public/_redirects` file
-   **GitHub Pages**: Use `public/404.html` with JavaScript redirect
-   **Firebase Hosting**: Use `firebase.json` with rewrites configuration
